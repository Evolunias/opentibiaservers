import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-realera-official');
}

export default function NewRealeraOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-realera-official" />;
}
