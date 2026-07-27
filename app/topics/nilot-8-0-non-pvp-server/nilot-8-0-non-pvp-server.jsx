import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-8-0-non-pvp-server');
}

export default function Nilot80NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-8-0-non-pvp-server" />;
}
