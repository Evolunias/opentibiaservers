import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibianus-official');
}

export default function TopTibianusOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-tibianus-official" />;
}
