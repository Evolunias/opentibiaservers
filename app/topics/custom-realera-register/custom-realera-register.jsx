import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-realera-register');
}

export default function CustomRealeraRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-realera-register" />;
}
