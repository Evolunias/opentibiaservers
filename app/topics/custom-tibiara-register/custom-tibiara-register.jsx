import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiara-register');
}

export default function CustomTibiaraRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiara-register" />;
}
