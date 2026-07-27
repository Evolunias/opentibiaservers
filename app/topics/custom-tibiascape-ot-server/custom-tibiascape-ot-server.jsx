import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiascape-ot-server');
}

export default function CustomTibiascapeOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiascape-ot-server" />;
}
