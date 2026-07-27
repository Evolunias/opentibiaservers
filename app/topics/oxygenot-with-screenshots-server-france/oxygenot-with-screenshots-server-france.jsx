import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-with-screenshots-server-france');
}

export default function OxygenotWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-with-screenshots-server-france" />;
}
