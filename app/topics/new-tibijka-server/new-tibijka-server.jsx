import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibijka-server');
}

export default function NewTibijkaServerKeywordPage() {
  return <StaticKeywordPage slug="new-tibijka-server" />;
}
