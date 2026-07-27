import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('libera-tibia-world');
}

export default function LiberaTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="libera-tibia-world" />;
}
