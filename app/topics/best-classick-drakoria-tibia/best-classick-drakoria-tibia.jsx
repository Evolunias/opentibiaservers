import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-classick-drakoria-tibia');
}

export default function BestClassickDrakoriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-classick-drakoria-tibia" />;
}
