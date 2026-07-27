import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-originaltibia-official');
}

export default function LowrateOriginaltibiaOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-originaltibia-official" />;
}
