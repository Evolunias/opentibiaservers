import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiame-ots');
}

export default function NoResetTibiameOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiame-ots" />;
}
