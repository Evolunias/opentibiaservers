import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-realera-official');
}

export default function CurrentRealeraOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-realera-official" />;
}
