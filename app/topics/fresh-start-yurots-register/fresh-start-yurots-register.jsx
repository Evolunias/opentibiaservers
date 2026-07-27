import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-yurots-register');
}

export default function FreshStartYurotsRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-yurots-register" />;
}
