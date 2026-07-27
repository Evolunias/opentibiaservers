import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-evolera-client');
}

export default function NewEvoleraClientKeywordPage() {
  return <StaticKeywordPage slug="new-evolera-client" />;
}
