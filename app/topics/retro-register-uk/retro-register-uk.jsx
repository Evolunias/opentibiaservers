import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-register-uk');
}

export default function RetroRegisterUkKeywordPage() {
  return <StaticKeywordPage slug="retro-register-uk" />;
}
