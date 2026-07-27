import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-canada-servers');
}

export default function CanobCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="canob-canada-servers" />;
}
