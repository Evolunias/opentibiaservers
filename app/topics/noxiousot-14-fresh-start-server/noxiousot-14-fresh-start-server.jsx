import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-14-fresh-start-server');
}

export default function Noxiousot14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-14-fresh-start-server" />;
}
