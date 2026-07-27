import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-kasteria-official');
}

export default function FreshStartKasteriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-kasteria-official" />;
}
