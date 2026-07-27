import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-blazera-register');
}

export default function TopBlazeraRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-blazera-register" />;
}
