import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-screenshots');
}

export default function TibiaoriginsScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-screenshots" />;
}
