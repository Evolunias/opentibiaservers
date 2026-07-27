import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-14-pvp-server');
}

export default function Nilot14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-14-pvp-server" />;
}
