import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-screenshots');
}

export default function MistOfDeathScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-screenshots" />;
}
