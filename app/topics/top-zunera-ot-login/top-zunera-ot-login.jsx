import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-zunera-ot-login');
}

export default function TopZuneraOtLoginKeywordPage() {
  return <StaticKeywordPage slug="top-zunera-ot-login" />;
}
