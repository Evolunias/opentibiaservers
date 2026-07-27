import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-midhem-register');
}

export default function FreshStartMidhemRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-midhem-register" />;
}
