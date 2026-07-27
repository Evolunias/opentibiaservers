import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-7-1-fresh-start-server');
}

export default function Otmadness71FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-7-1-fresh-start-server" />;
}
