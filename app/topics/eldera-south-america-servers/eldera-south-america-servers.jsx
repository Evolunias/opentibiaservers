import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-south-america-servers');
}

export default function ElderaSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="eldera-south-america-servers" />;
}
