import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-10-98-fresh-start-server');
}

export default function Otmadness1098FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-10-98-fresh-start-server" />;
}
