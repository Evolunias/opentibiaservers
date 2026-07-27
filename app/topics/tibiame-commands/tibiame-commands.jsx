import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-commands');
}

export default function TibiameCommandsKeywordPage() {
  return <StaticKeywordPage slug="tibiame-commands" />;
}
