import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('astera-tibia-world');
}

export default function AsteraTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="astera-tibia-world" />;
}
