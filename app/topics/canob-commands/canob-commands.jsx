import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-commands');
}

export default function CanobCommandsKeywordPage() {
  return <StaticKeywordPage slug="canob-commands" />;
}
