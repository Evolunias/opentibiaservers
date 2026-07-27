import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('renera-tibia');
}

export default function ReneraTibiaKeywordPage() {
  return <StaticKeywordPage slug="renera-tibia" />;
}
