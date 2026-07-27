import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-coxaot-open-tibia');
}

export default function CurrentCoxaotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-coxaot-open-tibia" />;
}
