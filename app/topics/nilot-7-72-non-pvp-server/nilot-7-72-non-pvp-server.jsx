import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-7-72-non-pvp-server');
}

export default function Nilot772NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-7-72-non-pvp-server" />;
}
