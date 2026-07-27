import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-with-screenshots-server-france');
}

export default function MistOfDeathWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-with-screenshots-server-france" />;
}
