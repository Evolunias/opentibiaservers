import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-commands');
}

export default function NtoStarCommandsKeywordPage() {
  return <StaticKeywordPage slug="nto-star-commands" />;
}
