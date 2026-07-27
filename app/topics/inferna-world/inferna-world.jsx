import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('inferna-world');
}

export default function InfernaWorldKeywordPage() {
  return <StaticKeywordPage slug="inferna-world" />;
}
