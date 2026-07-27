import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibijka-ot-server');
}

export default function CustomTibijkaOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-tibijka-ot-server" />;
}
