import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternia-tibia-world');
}

export default function EterniaTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="eternia-tibia-world" />;
}
