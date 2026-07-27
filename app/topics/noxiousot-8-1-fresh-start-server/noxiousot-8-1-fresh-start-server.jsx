import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-8-1-fresh-start-server');
}

export default function Noxiousot81FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-8-1-fresh-start-server" />;
}
