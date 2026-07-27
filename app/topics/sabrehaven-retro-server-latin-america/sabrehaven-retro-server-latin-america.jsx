import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-retro-server-latin-america');
}

export default function SabrehavenRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-retro-server-latin-america" />;
}
