import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-blazera-official');
}

export default function ActiveBlazeraOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-blazera-official" />;
}
