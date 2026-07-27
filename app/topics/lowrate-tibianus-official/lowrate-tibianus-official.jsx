import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibianus-official');
}

export default function LowrateTibianusOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibianus-official" />;
}
