import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-8-6-pvp-server');
}

export default function Nilot86PvpServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-8-6-pvp-server" />;
}
