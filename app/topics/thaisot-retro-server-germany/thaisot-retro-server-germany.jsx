import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-retro-server-germany');
}

export default function ThaisotRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="thaisot-retro-server-germany" />;
}
