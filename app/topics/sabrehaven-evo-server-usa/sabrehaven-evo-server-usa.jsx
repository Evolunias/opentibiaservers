import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-evo-server-usa');
}

export default function SabrehavenEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-evo-server-usa" />;
}
