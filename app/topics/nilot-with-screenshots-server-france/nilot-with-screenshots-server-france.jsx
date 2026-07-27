import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-screenshots-server-france');
}

export default function NilotWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-screenshots-server-france" />;
}
