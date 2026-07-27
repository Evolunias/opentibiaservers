import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-with-screenshots-server-europe');
}

export default function OxygenotWithScreenshotsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-with-screenshots-server-europe" />;
}
