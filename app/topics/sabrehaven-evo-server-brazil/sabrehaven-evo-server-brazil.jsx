import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-evo-server-brazil');
}

export default function SabrehavenEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-evo-server-brazil" />;
}
