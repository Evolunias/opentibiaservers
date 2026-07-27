import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-evo-server-canada');
}

export default function SabrehavenEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-evo-server-canada" />;
}
