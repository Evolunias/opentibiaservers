import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-with-screenshots-server-sweden');
}

export default function OxygenotWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-with-screenshots-server-sweden" />;
}
