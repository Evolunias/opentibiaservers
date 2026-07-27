import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-screenshots-server-france');
}

export default function LumineraWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-screenshots-server-france" />;
}
