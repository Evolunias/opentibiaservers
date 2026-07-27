import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-commands');
}

export default function NilotCommandsKeywordPage() {
  return <StaticKeywordPage slug="nilot-commands" />;
}
