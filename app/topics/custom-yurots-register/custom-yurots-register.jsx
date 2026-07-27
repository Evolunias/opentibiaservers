import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-yurots-register');
}

export default function CustomYurotsRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-yurots-register" />;
}
