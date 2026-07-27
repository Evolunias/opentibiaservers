import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-zunera-ot-login');
}

export default function ActiveZuneraOtLoginKeywordPage() {
  return <StaticKeywordPage slug="active-zunera-ot-login" />;
}
