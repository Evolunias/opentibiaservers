import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-midhem-server');
}

export default function WithActivePlayersMidhemServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-midhem-server" />;
}
