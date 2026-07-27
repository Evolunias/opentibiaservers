import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-coxaot-tibia');
}

export default function NoResetCoxaotTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-coxaot-tibia" />;
}
