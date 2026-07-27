import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nostalther-tibia');
}

export default function CurrentNostaltherTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-nostalther-tibia" />;
}
