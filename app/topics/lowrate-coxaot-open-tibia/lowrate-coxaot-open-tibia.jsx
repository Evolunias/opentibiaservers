import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-coxaot-open-tibia');
}

export default function LowrateCoxaotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-coxaot-open-tibia" />;
}
