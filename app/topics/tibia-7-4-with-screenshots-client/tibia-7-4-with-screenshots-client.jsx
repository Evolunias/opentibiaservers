import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-with-screenshots-client');
}

export default function Tibia74WithScreenshotsClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-with-screenshots-client" />;
}
