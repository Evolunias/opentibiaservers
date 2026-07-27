import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibijka-server');
}

export default function ActiveTibijkaServerKeywordPage() {
  return <StaticKeywordPage slug="active-tibijka-server" />;
}
