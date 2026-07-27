import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-evo-server-latin-america');
}

export default function SabrehavenEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-evo-server-latin-america" />;
}
