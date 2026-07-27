import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trimera-tibia-world');
}

export default function TrimeraTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="trimera-tibia-world" />;
}
