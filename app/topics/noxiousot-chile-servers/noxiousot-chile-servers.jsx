import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-chile-servers');
}

export default function NoxiousotChileServersKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-chile-servers" />;
}
