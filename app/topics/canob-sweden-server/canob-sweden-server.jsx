import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-sweden-server');
}

export default function CanobSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="canob-sweden-server" />;
}
