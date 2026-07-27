import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-blazera-login');
}

export default function OfficialBlazeraLoginKeywordPage() {
  return <StaticKeywordPage slug="official-blazera-login" />;
}
