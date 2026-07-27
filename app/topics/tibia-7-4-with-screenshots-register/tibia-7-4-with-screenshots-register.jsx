import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-with-screenshots-register');
}

export default function Tibia74WithScreenshotsRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-with-screenshots-register" />;
}
