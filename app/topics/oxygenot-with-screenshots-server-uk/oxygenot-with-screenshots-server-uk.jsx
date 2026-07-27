import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-with-screenshots-server-uk');
}

export default function OxygenotWithScreenshotsServerUkKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-with-screenshots-server-uk" />;
}
