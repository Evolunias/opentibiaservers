import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibijka-ot-server');
}

export default function ActiveTibijkaOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-tibijka-ot-server" />;
}
