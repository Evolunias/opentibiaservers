import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-noxiousot-official');
}

export default function NoResetNoxiousotOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-noxiousot-official" />;
}
