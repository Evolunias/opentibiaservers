import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-realera-official');
}

export default function OfficialRealeraOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-realera-official" />;
}
