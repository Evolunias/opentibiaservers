import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiascape');
}

export default function NoResetTibiascapeKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiascape" />;
}
