import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-pvpe-server-latin-america');
}

export default function MistOfDeathPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-pvpe-server-latin-america" />;
}
