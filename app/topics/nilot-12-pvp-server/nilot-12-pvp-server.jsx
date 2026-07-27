import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-12-pvp-server');
}

export default function Nilot12PvpServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-12-pvp-server" />;
}
