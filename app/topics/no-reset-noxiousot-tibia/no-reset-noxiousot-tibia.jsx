import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-noxiousot-tibia');
}

export default function NoResetNoxiousotTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-noxiousot-tibia" />;
}
