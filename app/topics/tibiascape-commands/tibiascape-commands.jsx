import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-commands');
}

export default function TibiascapeCommandsKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-commands" />;
}
