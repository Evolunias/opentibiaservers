import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-classick-drakoria-tibia');
}

export default function CurrentClassickDrakoriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-classick-drakoria-tibia" />;
}
