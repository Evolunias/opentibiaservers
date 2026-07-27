import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('jamera-tibia-world');
}

export default function JameraTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="jamera-tibia-world" />;
}
