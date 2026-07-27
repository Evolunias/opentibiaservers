import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-classick-drakoria-tibia');
}

export default function PopularClassickDrakoriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-classick-drakoria-tibia" />;
}
