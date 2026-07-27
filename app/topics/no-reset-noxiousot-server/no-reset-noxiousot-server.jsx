import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-noxiousot-server');
}

export default function NoResetNoxiousotServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-noxiousot-server" />;
}
