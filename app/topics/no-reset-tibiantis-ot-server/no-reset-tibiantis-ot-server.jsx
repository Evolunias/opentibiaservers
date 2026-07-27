import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiantis-ot-server');
}

export default function NoResetTibiantisOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiantis-ot-server" />;
}
