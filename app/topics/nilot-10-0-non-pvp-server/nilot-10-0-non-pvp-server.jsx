import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-10-0-non-pvp-server');
}

export default function Nilot100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-10-0-non-pvp-server" />;
}
