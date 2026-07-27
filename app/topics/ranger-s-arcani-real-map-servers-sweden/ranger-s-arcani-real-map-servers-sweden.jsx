import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-real-map-servers-sweden');
}

export default function RangerSArcaniRealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-real-map-servers-sweden" />;
}
