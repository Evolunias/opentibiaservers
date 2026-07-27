import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-empirebr-download');
}

export default function CurrentEmpirebrDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-empirebr-download" />;
}
