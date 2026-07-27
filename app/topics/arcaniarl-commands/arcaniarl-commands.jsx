import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-commands');
}

export default function ArcaniarlCommandsKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-commands" />;
}
