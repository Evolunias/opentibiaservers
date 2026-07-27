import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-yurots-register');
}

export default function NewYurotsRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-yurots-register" />;
}
