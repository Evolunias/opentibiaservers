import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-carlinot-official');
}

export default function CurrentCarlinotOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-carlinot-official" />;
}
