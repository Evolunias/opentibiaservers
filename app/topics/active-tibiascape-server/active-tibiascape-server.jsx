import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiascape-server');
}

export default function ActiveTibiascapeServerKeywordPage() {
  return <StaticKeywordPage slug="active-tibiascape-server" />;
}
