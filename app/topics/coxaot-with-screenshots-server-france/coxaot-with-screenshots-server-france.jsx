import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-screenshots-server-france');
}

export default function CoxaotWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-screenshots-server-france" />;
}
