import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-realera-register');
}

export default function TopRealeraRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-realera-register" />;
}
