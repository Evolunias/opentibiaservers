import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-originaltibia-official');
}

export default function ActiveOriginaltibiaOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-originaltibia-official" />;
}
