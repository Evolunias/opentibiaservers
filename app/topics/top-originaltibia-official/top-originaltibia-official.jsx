import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-originaltibia-official');
}

export default function TopOriginaltibiaOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-originaltibia-official" />;
}
