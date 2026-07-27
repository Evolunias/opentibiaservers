import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiara-register');
}

export default function ActiveTibiaraRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-tibiara-register" />;
}
