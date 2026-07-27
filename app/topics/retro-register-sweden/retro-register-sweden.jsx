import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-register-sweden');
}

export default function RetroRegisterSwedenKeywordPage() {
  return <StaticKeywordPage slug="retro-register-sweden" />;
}
