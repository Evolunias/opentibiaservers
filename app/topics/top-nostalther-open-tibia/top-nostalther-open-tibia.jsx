import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nostalther-open-tibia');
}

export default function TopNostaltherOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-nostalther-open-tibia" />;
}
