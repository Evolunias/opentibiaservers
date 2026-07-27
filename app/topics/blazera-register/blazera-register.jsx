import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-register');
}

export default function BlazeraRegisterKeywordPage() {
  return <StaticKeywordPage slug="blazera-register" />;
}
