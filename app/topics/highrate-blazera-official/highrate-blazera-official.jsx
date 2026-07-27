import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-blazera-official');
}

export default function HighrateBlazeraOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-blazera-official" />;
}
