import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-72-fresh-start-server');
}

export default function Tibiantis772FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-72-fresh-start-server" />;
}
