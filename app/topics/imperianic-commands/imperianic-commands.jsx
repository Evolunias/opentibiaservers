import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-commands');
}

export default function ImperianicCommandsKeywordPage() {
  return <StaticKeywordPage slug="imperianic-commands" />;
}
