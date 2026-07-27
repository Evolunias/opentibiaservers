import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-with-screenshots-server-france');
}

export default function InfernalOtWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-with-screenshots-server-france" />;
}
