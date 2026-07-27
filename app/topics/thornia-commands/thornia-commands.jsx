import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-commands');
}

export default function ThorniaCommandsKeywordPage() {
  return <StaticKeywordPage slug="thornia-commands" />;
}
