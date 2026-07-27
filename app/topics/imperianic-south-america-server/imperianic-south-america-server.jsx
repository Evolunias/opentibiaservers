import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-south-america-server');
}

export default function ImperianicSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-south-america-server" />;
}
