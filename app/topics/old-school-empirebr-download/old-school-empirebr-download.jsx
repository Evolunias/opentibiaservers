import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-empirebr-download');
}

export default function OldSchoolEmpirebrDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-empirebr-download" />;
}
