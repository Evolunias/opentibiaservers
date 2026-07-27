import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-archlight-ots');
}

export default function LowrateArchlightOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-archlight-ots" />;
}
