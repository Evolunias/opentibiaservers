import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-with-screenshots-client');
}

export default function Tibia100WithScreenshotsClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-with-screenshots-client" />;
}
