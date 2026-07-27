import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-blazera-official');
}

export default function CustomBlazeraOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-blazera-official" />;
}
