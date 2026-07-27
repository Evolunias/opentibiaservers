import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-kasteria-official');
}

export default function CurrentKasteriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-kasteria-official" />;
}
