import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-zunera-ot-login');
}

export default function NewZuneraOtLoginKeywordPage() {
  return <StaticKeywordPage slug="new-zunera-ot-login" />;
}
