import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-15-non-pvp-server');
}

export default function Nilot15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-15-non-pvp-server" />;
}
