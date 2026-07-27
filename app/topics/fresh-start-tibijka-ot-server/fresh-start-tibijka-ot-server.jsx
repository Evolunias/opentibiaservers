import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibijka-ot-server');
}

export default function FreshStartTibijkaOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibijka-ot-server" />;
}
