import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-official');
}

export default function NepreniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="neprenia-official" />;
}
