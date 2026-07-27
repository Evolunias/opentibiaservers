import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-commands');
}

export default function KasteriaCommandsKeywordPage() {
  return <StaticKeywordPage slug="kasteria-commands" />;
}
