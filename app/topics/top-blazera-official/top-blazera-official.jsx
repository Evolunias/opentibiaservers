import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-blazera-official');
}

export default function TopBlazeraOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-blazera-official" />;
}
