import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-canada-servers');
}

export default function NilotCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="nilot-canada-servers" />;
}
