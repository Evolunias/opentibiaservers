import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-tibiascape-server');
}

export default function LowExpTibiascapeServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-tibiascape-server" />;
}
