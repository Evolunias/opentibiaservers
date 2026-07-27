import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-mexico-server');
}

export default function NoxiousotMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-mexico-server" />;
}
