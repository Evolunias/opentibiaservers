import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('menera-tibia-world');
}

export default function MeneraTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="menera-tibia-world" />;
}
