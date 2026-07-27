import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-fresh-start-register');
}

export default function Tibia81FreshStartRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-fresh-start-register" />;
}
