import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-yurots-register');
}

export default function PopularYurotsRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-yurots-register" />;
}
