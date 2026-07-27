import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-10-0-pvp-server');
}

export default function Nilot100PvpServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-10-0-pvp-server" />;
}
