import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-south-america-servers');
}

export default function CanobSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="canob-south-america-servers" />;
}
