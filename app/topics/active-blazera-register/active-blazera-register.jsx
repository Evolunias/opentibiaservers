import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-blazera-register');
}

export default function ActiveBlazeraRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-blazera-register" />;
}
