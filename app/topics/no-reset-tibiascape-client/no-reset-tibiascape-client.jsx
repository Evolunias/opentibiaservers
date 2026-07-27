import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiascape-client');
}

export default function NoResetTibiascapeClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiascape-client" />;
}
