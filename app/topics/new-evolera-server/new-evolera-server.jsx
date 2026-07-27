import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-evolera-server');
}

export default function NewEvoleraServerKeywordPage() {
  return <StaticKeywordPage slug="new-evolera-server" />;
}
