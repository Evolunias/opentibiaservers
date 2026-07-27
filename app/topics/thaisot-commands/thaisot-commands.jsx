import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-commands');
}

export default function ThaisotCommandsKeywordPage() {
  return <StaticKeywordPage slug="thaisot-commands" />;
}
