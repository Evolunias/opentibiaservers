import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-commands');
}

export default function VenoreotCommandsKeywordPage() {
  return <StaticKeywordPage slug="venoreot-commands" />;
}
