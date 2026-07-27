import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-9-6-non-pvp-server');
}

export default function Nilot96NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-9-6-non-pvp-server" />;
}
