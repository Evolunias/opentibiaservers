import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-tibijka-server');
}

export default function HighExpTibijkaServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-tibijka-server" />;
}
