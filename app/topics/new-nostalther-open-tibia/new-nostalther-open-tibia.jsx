import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nostalther-open-tibia');
}

export default function NewNostaltherOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-nostalther-open-tibia" />;
}
