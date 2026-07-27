import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-realera-register');
}

export default function ActiveRealeraRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-realera-register" />;
}
