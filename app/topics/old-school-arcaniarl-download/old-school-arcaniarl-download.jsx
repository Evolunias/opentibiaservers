import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-arcaniarl-download');
}

export default function OldSchoolArcaniarlDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-arcaniarl-download" />;
}
