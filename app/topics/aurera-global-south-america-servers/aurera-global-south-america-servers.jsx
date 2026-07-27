import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-south-america-servers');
}

export default function AureraGlobalSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-south-america-servers" />;
}
