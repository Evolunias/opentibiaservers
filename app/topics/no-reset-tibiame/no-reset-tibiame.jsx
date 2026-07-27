import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiame');
}

export default function NoResetTibiameKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiame" />;
}
