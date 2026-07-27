import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-register-germany');
}

export default function RetroRegisterGermanyKeywordPage() {
  return <StaticKeywordPage slug="retro-register-germany" />;
}
