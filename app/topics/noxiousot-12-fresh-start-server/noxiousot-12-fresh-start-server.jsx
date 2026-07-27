import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-12-fresh-start-server');
}

export default function Noxiousot12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-12-fresh-start-server" />;
}
