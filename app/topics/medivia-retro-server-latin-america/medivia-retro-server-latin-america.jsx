import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-retro-server-latin-america');
}

export default function MediviaRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-retro-server-latin-america" />;
}
