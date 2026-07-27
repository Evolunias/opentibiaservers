import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-11-fresh-start-server');
}

export default function Otmadness11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-11-fresh-start-server" />;
}
