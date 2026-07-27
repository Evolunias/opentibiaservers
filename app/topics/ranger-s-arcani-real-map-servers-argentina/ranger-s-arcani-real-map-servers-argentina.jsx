import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-real-map-servers-argentina');
}

export default function RangerSArcaniRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-real-map-servers-argentina" />;
}
