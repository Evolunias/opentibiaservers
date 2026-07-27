import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiara-login');
}

export default function OfficialTibiaraLoginKeywordPage() {
  return <StaticKeywordPage slug="official-tibiara-login" />;
}
