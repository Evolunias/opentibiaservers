import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-custom-map-servers-sweden');
}

export default function RangerSArcaniCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-custom-map-servers-sweden" />;
}
