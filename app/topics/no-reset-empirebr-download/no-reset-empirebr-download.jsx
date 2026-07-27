import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-empirebr-download');
}

export default function NoResetEmpirebrDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-empirebr-download" />;
}
