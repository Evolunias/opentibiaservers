import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-empirebr-download');
}

export default function CustomEmpirebrDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-empirebr-download" />;
}
