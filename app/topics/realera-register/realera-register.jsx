import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-register');
}

export default function RealeraRegisterKeywordPage() {
  return <StaticKeywordPage slug="realera-register" />;
}
