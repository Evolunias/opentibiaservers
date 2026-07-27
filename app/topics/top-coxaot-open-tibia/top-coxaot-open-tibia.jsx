import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-coxaot-open-tibia');
}

export default function TopCoxaotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-coxaot-open-tibia" />;
}
