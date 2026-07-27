import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-evo-server-south-america');
}

export default function SabrehavenEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-evo-server-south-america" />;
}
