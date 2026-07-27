import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-luminera-login');
}

export default function NoResetLumineraLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-luminera-login" />;
}
