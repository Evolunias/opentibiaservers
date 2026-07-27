import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-13-fresh-start-server');
}

export default function Noxiousot13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-13-fresh-start-server" />;
}
