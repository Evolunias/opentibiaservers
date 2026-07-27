import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-latin-america-server');
}

export default function InfernalOtLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-latin-america-server" />;
}
