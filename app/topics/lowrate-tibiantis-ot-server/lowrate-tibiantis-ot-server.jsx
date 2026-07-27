import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiantis-ot-server');
}

export default function LowrateTibiantisOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiantis-ot-server" />;
}
