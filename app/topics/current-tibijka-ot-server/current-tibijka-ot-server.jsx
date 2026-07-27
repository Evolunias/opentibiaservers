import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibijka-ot-server');
}

export default function CurrentTibijkaOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-tibijka-ot-server" />;
}
