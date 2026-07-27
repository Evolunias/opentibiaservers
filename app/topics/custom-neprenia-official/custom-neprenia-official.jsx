import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-neprenia-official');
}

export default function CustomNepreniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-neprenia-official" />;
}
