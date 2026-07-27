import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-evo-servers-brazil');
}

export default function SabrehavenEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-evo-servers-brazil" />;
}
