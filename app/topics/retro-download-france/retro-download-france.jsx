import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-download-france');
}

export default function RetroDownloadFranceKeywordPage() {
  return <StaticKeywordPage slug="retro-download-france" />;
}
