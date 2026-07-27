import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-evolera-client');
}

export default function CustomEvoleraClientKeywordPage() {
  return <StaticKeywordPage slug="custom-evolera-client" />;
}
