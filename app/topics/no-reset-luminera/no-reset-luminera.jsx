import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-luminera');
}

export default function NoResetLumineraKeywordPage() {
  return <StaticKeywordPage slug="no-reset-luminera" />;
}
