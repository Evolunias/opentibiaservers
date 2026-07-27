import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-realera-register');
}

export default function FreshStartRealeraRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-realera-register" />;
}
