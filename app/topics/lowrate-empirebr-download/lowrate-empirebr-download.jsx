import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-empirebr-download');
}

export default function LowrateEmpirebrDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-empirebr-download" />;
}
