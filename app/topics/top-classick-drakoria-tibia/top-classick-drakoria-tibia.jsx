import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-classick-drakoria-tibia');
}

export default function TopClassickDrakoriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-classick-drakoria-tibia" />;
}
