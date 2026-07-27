import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-screenshots');
}

export default function TibiaretroScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-screenshots" />;
}
