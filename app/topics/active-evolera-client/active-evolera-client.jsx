import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-evolera-client');
}

export default function ActiveEvoleraClientKeywordPage() {
  return <StaticKeywordPage slug="active-evolera-client" />;
}
