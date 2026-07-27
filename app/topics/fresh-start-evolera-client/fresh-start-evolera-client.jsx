import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-evolera-client');
}

export default function FreshStartEvoleraClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-evolera-client" />;
}
