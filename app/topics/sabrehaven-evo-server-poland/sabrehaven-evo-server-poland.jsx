import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-evo-server-poland');
}

export default function SabrehavenEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-evo-server-poland" />;
}
