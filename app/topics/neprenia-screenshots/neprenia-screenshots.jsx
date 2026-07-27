import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-screenshots');
}

export default function NepreniaScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="neprenia-screenshots" />;
}
