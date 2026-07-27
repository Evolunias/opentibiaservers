import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-with-screenshots-server-sweden');
}

export default function SerenityWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="serenity-with-screenshots-server-sweden" />;
}
