import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-9-6-fresh-start-server');
}

export default function Otmadness96FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-9-6-fresh-start-server" />;
}
