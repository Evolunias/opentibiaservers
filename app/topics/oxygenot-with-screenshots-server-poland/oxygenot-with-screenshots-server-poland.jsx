import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-with-screenshots-server-poland');
}

export default function OxygenotWithScreenshotsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-with-screenshots-server-poland" />;
}
