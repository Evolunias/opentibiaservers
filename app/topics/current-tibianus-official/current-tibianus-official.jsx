import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibianus-official');
}

export default function CurrentTibianusOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-tibianus-official" />;
}
