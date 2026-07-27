import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('inferna');
}

export default function InfernaKeywordPage() {
  return <StaticKeywordPage slug="inferna" />;
}
