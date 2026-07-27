import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-tibijka-server');
}

export default function LowExpTibijkaServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-tibijka-server" />;
}
