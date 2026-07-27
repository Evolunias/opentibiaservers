import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-fresh-start-server-latin-america');
}

export default function SabrehavenFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-fresh-start-server-latin-america" />;
}
