import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-evo-server-france');
}

export default function SabrehavenEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-evo-server-france" />;
}
