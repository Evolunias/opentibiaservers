import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nostalther-tibia');
}

export default function NewNostaltherTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-nostalther-tibia" />;
}
