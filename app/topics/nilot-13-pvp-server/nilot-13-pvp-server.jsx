import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-13-pvp-server');
}

export default function Nilot13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-13-pvp-server" />;
}
