import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-fresh-start-server-brazil');
}

export default function OtmadnessFreshStartServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="otmadness-fresh-start-server-brazil" />;
}
