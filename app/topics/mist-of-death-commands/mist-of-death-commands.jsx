import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-commands');
}

export default function MistOfDeathCommandsKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-commands" />;
}
