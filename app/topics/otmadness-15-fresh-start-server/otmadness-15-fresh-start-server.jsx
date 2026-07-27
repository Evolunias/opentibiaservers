import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-15-fresh-start-server');
}

export default function Otmadness15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-15-fresh-start-server" />;
}
