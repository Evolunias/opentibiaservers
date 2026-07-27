import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-screenshots-client');
}

export default function Tibia14WithScreenshotsClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-screenshots-client" />;
}
