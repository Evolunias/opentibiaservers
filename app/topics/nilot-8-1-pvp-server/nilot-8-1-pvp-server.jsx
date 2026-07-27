import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-8-1-pvp-server');
}

export default function Nilot81PvpServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-8-1-pvp-server" />;
}
