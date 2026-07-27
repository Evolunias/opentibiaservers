import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-commands');
}

export default function AlasteraCommandsKeywordPage() {
  return <StaticKeywordPage slug="alastera-commands" />;
}
