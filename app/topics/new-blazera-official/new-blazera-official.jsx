import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-blazera-official');
}

export default function NewBlazeraOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-blazera-official" />;
}
