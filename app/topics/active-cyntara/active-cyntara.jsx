import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-cyntara');
}

export default function ActiveCyntaraKeywordPage() {
  return <StaticKeywordPage slug="active-cyntara" />;
}
