import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-15-fresh-start-server');
}

export default function Noxiousot15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-15-fresh-start-server" />;
}
