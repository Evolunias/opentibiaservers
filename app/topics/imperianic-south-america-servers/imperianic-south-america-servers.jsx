import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-south-america-servers');
}

export default function ImperianicSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="imperianic-south-america-servers" />;
}
