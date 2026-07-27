import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-realera-official');
}

export default function CustomRealeraOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-realera-official" />;
}
