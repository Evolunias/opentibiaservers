import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-screenshots-server-france');
}

export default function MidhemWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-screenshots-server-france" />;
}
