import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-midhem-register');
}

export default function ActiveMidhemRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-midhem-register" />;
}
