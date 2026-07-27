import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-10-0-fresh-start-server');
}

export default function Canob100FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="canob-10-0-fresh-start-server" />;
}
