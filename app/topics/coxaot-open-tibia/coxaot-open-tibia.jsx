import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-open-tibia');
}

export default function CoxaotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-open-tibia" />;
}
