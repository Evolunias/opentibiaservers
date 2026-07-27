import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-seasonal-register');
}

export default function Tibia80SeasonalRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-seasonal-register" />;
}
