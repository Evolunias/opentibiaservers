import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-fresh-start-server-germany');
}

export default function OtmadnessFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="otmadness-fresh-start-server-germany" />;
}
