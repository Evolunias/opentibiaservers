import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-tibiascape-server');
}

export default function HighExpTibiascapeServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-tibiascape-server" />;
}
