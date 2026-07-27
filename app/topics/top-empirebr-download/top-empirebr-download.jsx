import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-empirebr-download');
}

export default function TopEmpirebrDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-empirebr-download" />;
}
