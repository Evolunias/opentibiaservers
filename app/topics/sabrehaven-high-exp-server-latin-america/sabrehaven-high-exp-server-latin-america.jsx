import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-high-exp-server-latin-america');
}

export default function SabrehavenHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-high-exp-server-latin-america" />;
}
