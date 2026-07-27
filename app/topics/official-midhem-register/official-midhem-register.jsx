import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-midhem-register');
}

export default function OfficialMidhemRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-midhem-register" />;
}
