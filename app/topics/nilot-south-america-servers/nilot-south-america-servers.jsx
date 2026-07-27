import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-south-america-servers');
}

export default function NilotSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="nilot-south-america-servers" />;
}
