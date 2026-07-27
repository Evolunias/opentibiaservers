import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-fresh-start-server-europe');
}

export default function OtmadnessFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="otmadness-fresh-start-server-europe" />;
}
