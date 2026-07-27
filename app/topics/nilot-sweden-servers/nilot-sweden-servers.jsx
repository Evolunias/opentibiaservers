import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-sweden-servers');
}

export default function NilotSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="nilot-sweden-servers" />;
}
