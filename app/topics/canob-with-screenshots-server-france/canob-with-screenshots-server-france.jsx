import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-screenshots-server-france');
}

export default function CanobWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="canob-with-screenshots-server-france" />;
}
