import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-neprenia');
}

export default function OfficialNepreniaKeywordPage() {
  return <StaticKeywordPage slug="official-neprenia" />;
}
