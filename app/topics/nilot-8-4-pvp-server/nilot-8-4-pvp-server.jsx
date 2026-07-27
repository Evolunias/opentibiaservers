import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-8-4-pvp-server');
}

export default function Nilot84PvpServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-8-4-pvp-server" />;
}
