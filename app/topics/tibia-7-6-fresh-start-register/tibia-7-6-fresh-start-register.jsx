import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-fresh-start-register');
}

export default function Tibia76FreshStartRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-fresh-start-register" />;
}
