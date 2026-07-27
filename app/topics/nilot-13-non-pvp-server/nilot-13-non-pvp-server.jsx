import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-13-non-pvp-server');
}

export default function Nilot13NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-13-non-pvp-server" />;
}
