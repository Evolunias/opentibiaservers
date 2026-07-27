import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-midhem-register');
}

export default function CustomMidhemRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-midhem-register" />;
}
