import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-tibia');
}

export default function CoxaotTibiaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-tibia" />;
}
