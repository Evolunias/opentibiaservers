import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-rookgaard-tales-download');
}

export default function OldSchoolRookgaardTalesDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-rookgaard-tales-download" />;
}
