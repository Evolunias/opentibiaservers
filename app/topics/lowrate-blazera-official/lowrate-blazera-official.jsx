import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-blazera-official');
}

export default function LowrateBlazeraOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-blazera-official" />;
}
