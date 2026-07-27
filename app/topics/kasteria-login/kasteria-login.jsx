import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-login');
}

export default function KasteriaLoginKeywordPage() {
  return <StaticKeywordPage slug="kasteria-login" />;
}
