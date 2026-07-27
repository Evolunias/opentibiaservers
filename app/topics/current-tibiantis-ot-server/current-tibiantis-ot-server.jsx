import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiantis-ot-server');
}

export default function CurrentTibiantisOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-tibiantis-ot-server" />;
}
