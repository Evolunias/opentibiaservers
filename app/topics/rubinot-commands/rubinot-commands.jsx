import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-commands');
}

export default function RubinotCommandsKeywordPage() {
  return <StaticKeywordPage slug="rubinot-commands" />;
}
