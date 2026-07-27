import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-register-argentina');
}

export default function RetroRegisterArgentinaKeywordPage() {
  return <StaticKeywordPage slug="retro-register-argentina" />;
}
