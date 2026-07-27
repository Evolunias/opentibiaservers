import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-login');
}

export default function LumineraLoginKeywordPage() {
  return <StaticKeywordPage slug="luminera-login" />;
}
