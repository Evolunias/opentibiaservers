import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-10-98-fresh-start-server');
}

export default function Canob1098FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="canob-10-98-fresh-start-server" />;
}
