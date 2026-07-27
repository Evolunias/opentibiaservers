import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-register-south-america');
}

export default function RetroRegisterSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-register-south-america" />;
}
