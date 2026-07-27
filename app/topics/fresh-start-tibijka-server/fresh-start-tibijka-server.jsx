import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibijka-server');
}

export default function FreshStartTibijkaServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibijka-server" />;
}
