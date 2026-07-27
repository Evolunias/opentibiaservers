import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-status');
}

export default function CanobStatusKeywordPage() {
  return <StaticKeywordPage slug="canob-status" />;
}
