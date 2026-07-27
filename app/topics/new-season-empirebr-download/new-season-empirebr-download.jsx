import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-empirebr-download');
}

export default function NewSeasonEmpirebrDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-empirebr-download" />;
}
