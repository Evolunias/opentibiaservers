import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiascape-ot-server');
}

export default function LowrateTibiascapeOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiascape-ot-server" />;
}
