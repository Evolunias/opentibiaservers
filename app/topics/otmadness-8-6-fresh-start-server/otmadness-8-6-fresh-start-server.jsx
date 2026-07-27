import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-6-fresh-start-server');
}

export default function Otmadness86FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-6-fresh-start-server" />;
}
