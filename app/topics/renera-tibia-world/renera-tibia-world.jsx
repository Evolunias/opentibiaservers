import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('renera-tibia-world');
}

export default function ReneraTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="renera-tibia-world" />;
}
