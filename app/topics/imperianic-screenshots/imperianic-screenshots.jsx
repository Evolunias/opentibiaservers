import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-screenshots');
}

export default function ImperianicScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="imperianic-screenshots" />;
}
