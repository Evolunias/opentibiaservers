import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-midhem-register');
}

export default function NewMidhemRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-midhem-register" />;
}
