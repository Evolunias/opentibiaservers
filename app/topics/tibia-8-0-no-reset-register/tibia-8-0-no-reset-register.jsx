import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-no-reset-register');
}

export default function Tibia80NoResetRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-no-reset-register" />;
}
