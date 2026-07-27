import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-oldera-tibia');
}

export default function FreshStartOlderaTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-oldera-tibia" />;
}
