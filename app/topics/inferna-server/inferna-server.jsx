import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('inferna-server');
}

export default function InfernaServerKeywordPage() {
  return <StaticKeywordPage slug="inferna-server" />;
}
