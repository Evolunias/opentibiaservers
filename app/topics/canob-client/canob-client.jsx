import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-client');
}

export default function CanobClientKeywordPage() {
  return <StaticKeywordPage slug="canob-client" />;
}
