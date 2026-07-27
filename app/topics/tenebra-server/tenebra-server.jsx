import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tenebra-server');
}

export default function TenebraServerKeywordPage() {
  return <StaticKeywordPage slug="tenebra-server" />;
}
