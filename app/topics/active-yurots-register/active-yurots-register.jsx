import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-yurots-register');
}

export default function ActiveYurotsRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-yurots-register" />;
}
