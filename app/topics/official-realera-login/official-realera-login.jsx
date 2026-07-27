import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-realera-login');
}

export default function OfficialRealeraLoginKeywordPage() {
  return <StaticKeywordPage slug="official-realera-login" />;
}
