import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-open-tibia-server-latin-america');
}

export default function FreshStartOpenTibiaServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-open-tibia-server-latin-america" />;
}
