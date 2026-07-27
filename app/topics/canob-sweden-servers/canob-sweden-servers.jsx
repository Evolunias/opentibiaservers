import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-sweden-servers');
}

export default function CanobSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="canob-sweden-servers" />;
}
