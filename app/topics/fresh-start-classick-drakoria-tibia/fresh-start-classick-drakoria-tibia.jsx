import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-classick-drakoria-tibia');
}

export default function FreshStartClassickDrakoriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-classick-drakoria-tibia" />;
}
