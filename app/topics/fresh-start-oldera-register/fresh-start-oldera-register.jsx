import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-oldera-register');
}

export default function FreshStartOlderaRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-oldera-register" />;
}
