import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-11-non-pvp-server');
}

export default function Nilot11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-11-non-pvp-server" />;
}
