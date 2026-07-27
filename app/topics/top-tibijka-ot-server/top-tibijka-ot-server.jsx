import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibijka-ot-server');
}

export default function TopTibijkaOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-tibijka-ot-server" />;
}
