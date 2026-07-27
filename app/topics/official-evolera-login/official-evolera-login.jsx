import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-evolera-login');
}

export default function OfficialEvoleraLoginKeywordPage() {
  return <StaticKeywordPage slug="official-evolera-login" />;
}
