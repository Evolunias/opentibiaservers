import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-with-screenshots-server-sweden');
}

export default function MistOfDeathWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-with-screenshots-server-sweden" />;
}
