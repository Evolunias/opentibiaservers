import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-france-servers');
}

export default function NoxiousotFranceServersKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-france-servers" />;
}
