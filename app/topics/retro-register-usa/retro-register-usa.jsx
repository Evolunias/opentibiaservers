import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-register-usa');
}

export default function RetroRegisterUsaKeywordPage() {
  return <StaticKeywordPage slug="retro-register-usa" />;
}
