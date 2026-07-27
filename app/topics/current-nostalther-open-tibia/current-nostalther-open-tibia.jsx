import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nostalther-open-tibia');
}

export default function CurrentNostaltherOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-nostalther-open-tibia" />;
}
