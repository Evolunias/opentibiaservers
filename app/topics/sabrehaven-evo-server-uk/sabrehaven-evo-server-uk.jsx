import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-evo-server-uk');
}

export default function SabrehavenEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-evo-server-uk" />;
}
