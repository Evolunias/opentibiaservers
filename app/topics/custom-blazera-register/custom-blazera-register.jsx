import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-blazera-register');
}

export default function CustomBlazeraRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-blazera-register" />;
}
