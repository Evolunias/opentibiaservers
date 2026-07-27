import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-11-pvp-server');
}

export default function Nilot11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-11-pvp-server" />;
}
