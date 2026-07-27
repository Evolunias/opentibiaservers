import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-13-fresh-start-server');
}

export default function Otmadness13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-13-fresh-start-server" />;
}
