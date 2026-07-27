import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-south-america-servers');
}

export default function NoxiousotSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-south-america-servers" />;
}
