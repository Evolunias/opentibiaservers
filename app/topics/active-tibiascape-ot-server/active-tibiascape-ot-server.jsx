import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiascape-ot-server');
}

export default function ActiveTibiascapeOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-tibiascape-ot-server" />;
}
