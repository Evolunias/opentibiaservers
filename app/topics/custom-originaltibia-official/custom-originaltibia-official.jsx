import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-originaltibia-official');
}

export default function CustomOriginaltibiaOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-originaltibia-official" />;
}
