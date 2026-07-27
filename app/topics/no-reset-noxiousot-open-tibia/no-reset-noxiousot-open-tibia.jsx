import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-noxiousot-open-tibia');
}

export default function NoResetNoxiousotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-noxiousot-open-tibia" />;
}
