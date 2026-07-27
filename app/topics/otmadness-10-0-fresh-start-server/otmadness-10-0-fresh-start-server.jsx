import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-10-0-fresh-start-server');
}

export default function Otmadness100FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-10-0-fresh-start-server" />;
}
