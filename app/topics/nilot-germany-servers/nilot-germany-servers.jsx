import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-germany-servers');
}

export default function NilotGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="nilot-germany-servers" />;
}
