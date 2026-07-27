import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-screenshots-server-france');
}

export default function EvoleraWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-screenshots-server-france" />;
}
