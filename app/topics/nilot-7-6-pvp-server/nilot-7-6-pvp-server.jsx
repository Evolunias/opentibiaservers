import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-7-6-pvp-server');
}

export default function Nilot76PvpServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-7-6-pvp-server" />;
}
