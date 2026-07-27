import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-screenshots');
}

export default function NostaltherScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="nostalther-screenshots" />;
}
