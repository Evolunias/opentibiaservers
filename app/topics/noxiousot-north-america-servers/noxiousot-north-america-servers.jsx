import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-north-america-servers');
}

export default function NoxiousotNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-north-america-servers" />;
}
