import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-south-america-server');
}

export default function AureraGlobalSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-south-america-server" />;
}
