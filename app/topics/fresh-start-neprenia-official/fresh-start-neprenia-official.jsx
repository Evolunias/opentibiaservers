import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-neprenia-official');
}

export default function FreshStartNepreniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-neprenia-official" />;
}
