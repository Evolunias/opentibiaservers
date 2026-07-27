import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-coxaot-tibia');
}

export default function ActiveCoxaotTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-coxaot-tibia" />;
}
