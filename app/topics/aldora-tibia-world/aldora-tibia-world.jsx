import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aldora-tibia-world');
}

export default function AldoraTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="aldora-tibia-world" />;
}
