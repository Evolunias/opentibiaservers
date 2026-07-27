import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-canada-servers');
}

export default function NoxiousotCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-canada-servers" />;
}
