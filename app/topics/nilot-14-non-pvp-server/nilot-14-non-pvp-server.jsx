import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-14-non-pvp-server');
}

export default function Nilot14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-14-non-pvp-server" />;
}
