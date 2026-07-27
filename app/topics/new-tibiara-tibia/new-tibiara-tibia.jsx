import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiara-tibia');
}

export default function NewTibiaraTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-tibiara-tibia" />;
}
