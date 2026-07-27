import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-12-non-pvp-server');
}

export default function Nilot12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-12-non-pvp-server" />;
}
