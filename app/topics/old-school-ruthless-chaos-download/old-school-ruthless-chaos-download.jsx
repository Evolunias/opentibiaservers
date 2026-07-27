import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ruthless-chaos-download');
}

export default function OldSchoolRuthlessChaosDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-ruthless-chaos-download" />;
}
