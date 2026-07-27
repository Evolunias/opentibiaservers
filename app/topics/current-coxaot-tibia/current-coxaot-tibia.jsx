import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-coxaot-tibia');
}

export default function CurrentCoxaotTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-coxaot-tibia" />;
}
