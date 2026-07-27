import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('julera-tibia-world');
}

export default function JuleraTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="julera-tibia-world" />;
}
