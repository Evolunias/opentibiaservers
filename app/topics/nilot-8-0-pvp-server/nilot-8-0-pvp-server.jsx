import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-8-0-pvp-server');
}

export default function Nilot80PvpServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-8-0-pvp-server" />;
}
