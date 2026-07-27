import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-coxaot-tibia');
}

export default function TopCoxaotTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-coxaot-tibia" />;
}
