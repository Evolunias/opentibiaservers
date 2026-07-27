import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-with-screenshots-server-argentina');
}

export default function OxygenotWithScreenshotsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-with-screenshots-server-argentina" />;
}
