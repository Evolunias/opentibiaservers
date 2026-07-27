import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-coxaot-open-tibia');
}

export default function ActiveCoxaotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-coxaot-open-tibia" />;
}
