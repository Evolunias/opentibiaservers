import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-low-exp-server-latin-america');
}

export default function SabrehavenLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-low-exp-server-latin-america" />;
}
