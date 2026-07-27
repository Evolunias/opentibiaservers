import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibianus-official');
}

export default function ActiveTibianusOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-tibianus-official" />;
}
