import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-chile-server');
}

export default function NoxiousotChileServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-chile-server" />;
}
