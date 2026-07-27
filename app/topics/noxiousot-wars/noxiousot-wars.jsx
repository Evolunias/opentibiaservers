import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-wars');
}

export default function NoxiousotWarsKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-wars" />;
}
