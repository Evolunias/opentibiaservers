import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-10-98-non-pvp-server');
}

export default function Nilot1098NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-10-98-non-pvp-server" />;
}
