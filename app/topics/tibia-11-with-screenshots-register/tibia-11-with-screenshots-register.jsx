import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-screenshots-register');
}

export default function Tibia11WithScreenshotsRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-screenshots-register" />;
}
