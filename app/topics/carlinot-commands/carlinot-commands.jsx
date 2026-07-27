import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-commands');
}

export default function CarlinotCommandsKeywordPage() {
  return <StaticKeywordPage slug="carlinot-commands" />;
}
