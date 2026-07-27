import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-rookgaard-tales-client');
}

export default function OldSchoolRookgaardTalesClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-rookgaard-tales-client" />;
}
