import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-luminera-login');
}

export default function ActiveLumineraLoginKeywordPage() {
  return <StaticKeywordPage slug="active-luminera-login" />;
}
