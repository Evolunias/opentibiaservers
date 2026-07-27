import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-south-america-servers');
}

export default function OxygenotSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-south-america-servers" />;
}
