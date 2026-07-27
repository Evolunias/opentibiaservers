import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-luminera-login');
}

export default function OfficialLumineraLoginKeywordPage() {
  return <StaticKeywordPage slug="official-luminera-login" />;
}
