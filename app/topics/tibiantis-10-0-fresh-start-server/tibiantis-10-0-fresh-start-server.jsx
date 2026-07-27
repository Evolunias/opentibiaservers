import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-10-0-fresh-start-server');
}

export default function Tibiantis100FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-10-0-fresh-start-server" />;
}
