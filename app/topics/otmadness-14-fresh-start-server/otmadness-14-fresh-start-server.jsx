import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-14-fresh-start-server');
}

export default function Otmadness14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-14-fresh-start-server" />;
}
