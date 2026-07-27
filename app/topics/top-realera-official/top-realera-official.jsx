import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-realera-official');
}

export default function TopRealeraOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-realera-official" />;
}
