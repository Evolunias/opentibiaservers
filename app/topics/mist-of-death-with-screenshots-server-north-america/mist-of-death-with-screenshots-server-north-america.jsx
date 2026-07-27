import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-with-screenshots-server-north-america');
}

export default function MistOfDeathWithScreenshotsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-with-screenshots-server-north-america" />;
}
