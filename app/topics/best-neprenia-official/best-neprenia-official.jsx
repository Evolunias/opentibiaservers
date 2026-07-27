import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-neprenia-official');
}

export default function BestNepreniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-neprenia-official" />;
}
