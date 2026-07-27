import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-register-europe');
}

export default function RetroRegisterEuropeKeywordPage() {
  return <StaticKeywordPage slug="retro-register-europe" />;
}
