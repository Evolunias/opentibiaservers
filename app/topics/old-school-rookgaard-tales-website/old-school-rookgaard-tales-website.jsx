import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-rookgaard-tales-website');
}

export default function OldSchoolRookgaardTalesWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-rookgaard-tales-website" />;
}
