import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-neprenia-official');
}

export default function ActiveNepreniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-neprenia-official" />;
}
