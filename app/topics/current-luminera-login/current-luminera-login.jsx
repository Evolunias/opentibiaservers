import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-luminera-login');
}

export default function CurrentLumineraLoginKeywordPage() {
  return <StaticKeywordPage slug="current-luminera-login" />;
}
