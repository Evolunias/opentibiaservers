import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiascape-server');
}

export default function CustomTibiascapeServerKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiascape-server" />;
}
