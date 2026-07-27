import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-archlight-official');
}

export default function LowrateArchlightOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-archlight-official" />;
}
