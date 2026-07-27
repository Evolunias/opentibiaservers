import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-7-1-pvp-server');
}

export default function Nilot71PvpServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-7-1-pvp-server" />;
}
