import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-coxaot-open-tibia');
}

export default function NoResetCoxaotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-coxaot-open-tibia" />;
}
