import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-neprenia-official');
}

export default function CurrentNepreniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-neprenia-official" />;
}
