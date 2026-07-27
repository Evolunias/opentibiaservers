import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-luminera-login');
}

export default function CustomLumineraLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-luminera-login" />;
}
