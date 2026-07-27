import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiascape-ots');
}

export default function NoResetTibiascapeOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiascape-ots" />;
}
