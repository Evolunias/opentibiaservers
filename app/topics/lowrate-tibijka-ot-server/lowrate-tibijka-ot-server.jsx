import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibijka-ot-server');
}

export default function LowrateTibijkaOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibijka-ot-server" />;
}
