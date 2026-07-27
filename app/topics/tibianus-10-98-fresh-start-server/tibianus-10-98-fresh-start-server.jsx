import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-10-98-fresh-start-server');
}

export default function Tibianus1098FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-10-98-fresh-start-server" />;
}
