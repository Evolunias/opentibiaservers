import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-latin-america-servers');
}

export default function InfernalOtLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-latin-america-servers" />;
}
