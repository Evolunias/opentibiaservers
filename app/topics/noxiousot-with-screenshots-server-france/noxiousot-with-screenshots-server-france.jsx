import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-with-screenshots-server-france');
}

export default function NoxiousotWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-with-screenshots-server-france" />;
}
