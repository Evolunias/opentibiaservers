import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-tibia-world');
}

export default function CalmeraTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="calmera-tibia-world" />;
}
