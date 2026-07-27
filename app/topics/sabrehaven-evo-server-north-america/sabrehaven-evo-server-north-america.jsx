import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-evo-server-north-america');
}

export default function SabrehavenEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-evo-server-north-america" />;
}
