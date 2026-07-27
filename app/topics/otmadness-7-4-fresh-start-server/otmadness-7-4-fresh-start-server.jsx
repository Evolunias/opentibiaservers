import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-7-4-fresh-start-server');
}

export default function Otmadness74FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-7-4-fresh-start-server" />;
}
