import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-south-america-server');
}

export default function OxygenotSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-south-america-server" />;
}
