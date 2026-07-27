import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-reset');
}

export default function KasteriaResetKeywordPage() {
  return <StaticKeywordPage slug="kasteria-reset" />;
}
