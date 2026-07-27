import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-empirebr-download');
}

export default function FreshStartEmpirebrDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-empirebr-download" />;
}
