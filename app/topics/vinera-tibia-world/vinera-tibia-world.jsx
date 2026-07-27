import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('vinera-tibia-world');
}

export default function VineraTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="vinera-tibia-world" />;
}
