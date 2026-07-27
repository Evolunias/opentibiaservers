import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-4-fresh-start-server');
}

export default function Otmadness84FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-4-fresh-start-server" />;
}
