import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('isara-tibia-world');
}

export default function IsaraTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="isara-tibia-world" />;
}
