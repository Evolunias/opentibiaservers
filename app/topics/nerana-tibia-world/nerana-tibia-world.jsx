import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nerana-tibia-world');
}

export default function NeranaTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="nerana-tibia-world" />;
}
