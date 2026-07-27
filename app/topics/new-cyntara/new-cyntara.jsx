import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-cyntara');
}

export default function NewCyntaraKeywordPage() {
  return <StaticKeywordPage slug="new-cyntara" />;
}
