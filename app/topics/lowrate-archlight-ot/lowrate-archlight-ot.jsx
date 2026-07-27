import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-archlight-ot');
}

export default function LowrateArchlightOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-archlight-ot" />;
}
