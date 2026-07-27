import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-official');
}

export default function BlazeraOfficialKeywordPage() {
  return <StaticKeywordPage slug="blazera-official" />;
}
