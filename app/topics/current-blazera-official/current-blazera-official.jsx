import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-blazera-official');
}

export default function CurrentBlazeraOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-blazera-official" />;
}
