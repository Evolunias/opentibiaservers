import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibijka-server');
}

export default function CustomTibijkaServerKeywordPage() {
  return <StaticKeywordPage slug="custom-tibijka-server" />;
}
