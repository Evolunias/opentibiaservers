import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-empirebr-download');
}

export default function BestEmpirebrDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-empirebr-download" />;
}
