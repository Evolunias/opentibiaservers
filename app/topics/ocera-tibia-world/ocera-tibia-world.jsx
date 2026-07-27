import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ocera-tibia-world');
}

export default function OceraTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="ocera-tibia-world" />;
}
