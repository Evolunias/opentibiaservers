import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-15-pvp-server');
}

export default function Nilot15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-15-pvp-server" />;
}
