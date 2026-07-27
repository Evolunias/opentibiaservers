import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-usa-servers');
}

export default function NilotUsaServersKeywordPage() {
  return <StaticKeywordPage slug="nilot-usa-servers" />;
}
