import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-empirebr-download');
}

export default function ActiveEmpirebrDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-empirebr-download" />;
}
