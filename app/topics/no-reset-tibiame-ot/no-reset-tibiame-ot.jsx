import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiame-ot');
}

export default function NoResetTibiameOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiame-ot" />;
}
