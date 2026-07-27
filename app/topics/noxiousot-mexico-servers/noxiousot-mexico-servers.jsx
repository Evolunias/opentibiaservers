import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-mexico-servers');
}

export default function NoxiousotMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-mexico-servers" />;
}
