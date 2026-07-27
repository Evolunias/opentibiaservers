import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-with-screenshots-server-usa');
}

export default function OxygenotWithScreenshotsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-with-screenshots-server-usa" />;
}
