import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-oldera-tibia');
}

export default function NewOlderaTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-oldera-tibia" />;
}
