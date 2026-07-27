import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-empirebr-download');
}

export default function HighrateEmpirebrDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-empirebr-download" />;
}
