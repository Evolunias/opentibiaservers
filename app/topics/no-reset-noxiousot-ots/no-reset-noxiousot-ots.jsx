import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-noxiousot-ots');
}

export default function NoResetNoxiousotOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-noxiousot-ots" />;
}
