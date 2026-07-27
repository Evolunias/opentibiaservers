import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-evolera-client');
}

export default function TopEvoleraClientKeywordPage() {
  return <StaticKeywordPage slug="top-evolera-client" />;
}
