import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternia-tibia');
}

export default function EterniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="eternia-tibia" />;
}
