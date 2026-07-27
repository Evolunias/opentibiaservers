import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-7-4-non-pvp-server');
}

export default function Nilot74NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-7-4-non-pvp-server" />;
}
