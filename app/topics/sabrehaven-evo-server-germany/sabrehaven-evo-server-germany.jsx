import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-evo-server-germany');
}

export default function SabrehavenEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-evo-server-germany" />;
}
