import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-evo-server-mexico');
}

export default function SabrehavenEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-evo-server-mexico" />;
}
