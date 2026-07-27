import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-10-0-fresh-start-server');
}

export default function Noxiousot100FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-10-0-fresh-start-server" />;
}
