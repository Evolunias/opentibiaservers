import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-register-brazil');
}

export default function RetroRegisterBrazilKeywordPage() {
  return <StaticKeywordPage slug="retro-register-brazil" />;
}
