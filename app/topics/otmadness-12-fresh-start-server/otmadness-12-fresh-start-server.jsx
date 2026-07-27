import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-12-fresh-start-server');
}

export default function Otmadness12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-12-fresh-start-server" />;
}
