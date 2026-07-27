import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-evo-servers-usa');
}

export default function SabrehavenEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-evo-servers-usa" />;
}
