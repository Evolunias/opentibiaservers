import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-neprenia-official');
}

export default function NewNepreniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-neprenia-official" />;
}
