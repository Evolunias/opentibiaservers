import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiascape-ot');
}

export default function NoResetTibiascapeOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiascape-ot" />;
}
