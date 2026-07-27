import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-commands');
}

export default function EvoluniaCommandsKeywordPage() {
  return <StaticKeywordPage slug="evolunia-commands" />;
}
