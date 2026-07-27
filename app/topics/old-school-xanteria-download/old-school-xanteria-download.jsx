import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-xanteria-download');
}

export default function OldSchoolXanteriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-xanteria-download" />;
}
