import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-empirebr-download');
}

export default function OfficialEmpirebrDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-empirebr-download" />;
}
