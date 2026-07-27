import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-with-screenshots-server-france');
}

export default function AureraGlobalWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-with-screenshots-server-france" />;
}
