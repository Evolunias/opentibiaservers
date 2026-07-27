import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-originaltibia-official');
}

export default function CurrentOriginaltibiaOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-originaltibia-official" />;
}
