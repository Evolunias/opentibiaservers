import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-register');
}

export default function MidhemRegisterKeywordPage() {
  return <StaticKeywordPage slug="midhem-register" />;
}
