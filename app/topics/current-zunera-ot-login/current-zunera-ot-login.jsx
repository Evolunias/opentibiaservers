import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-zunera-ot-login');
}

export default function CurrentZuneraOtLoginKeywordPage() {
  return <StaticKeywordPage slug="current-zunera-ot-login" />;
}
