import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-fresh-start-server-poland');
}

export default function OtmadnessFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="otmadness-fresh-start-server-poland" />;
}
