import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiascape-ot-server');
}

export default function TopTibiascapeOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-tibiascape-ot-server" />;
}
