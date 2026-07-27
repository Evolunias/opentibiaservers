import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-8-4-fresh-start-server');
}

export default function Noxiousot84FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-8-4-fresh-start-server" />;
}
