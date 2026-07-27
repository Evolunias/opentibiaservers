import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-yurots-register');
}

export default function TopYurotsRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-yurots-register" />;
}
