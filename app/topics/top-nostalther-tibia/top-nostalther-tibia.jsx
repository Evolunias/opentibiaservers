import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nostalther-tibia');
}

export default function TopNostaltherTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-nostalther-tibia" />;
}
