import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-luminera-client');
}

export default function NoResetLumineraClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-luminera-client" />;
}
