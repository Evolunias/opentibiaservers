import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-empirebr-download');
}

export default function PopularEmpirebrDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-empirebr-download" />;
}
