import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-empirebr-download');
}

export default function NewEmpirebrDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-empirebr-download" />;
}
