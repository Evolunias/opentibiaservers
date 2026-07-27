import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-register');
}

export default function TibiaretroRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-register" />;
}
