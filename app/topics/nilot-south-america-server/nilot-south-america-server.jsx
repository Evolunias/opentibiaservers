import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-south-america-server');
}

export default function NilotSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-south-america-server" />;
}
