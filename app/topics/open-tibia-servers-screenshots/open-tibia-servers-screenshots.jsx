import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-servers-screenshots');
}

export default function OpenTibiaServersScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-servers-screenshots" />;
}
