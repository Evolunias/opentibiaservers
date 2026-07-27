import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-blazera-official');
}

export default function BestBlazeraOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-blazera-official" />;
}
