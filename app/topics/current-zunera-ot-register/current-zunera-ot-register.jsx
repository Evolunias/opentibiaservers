import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-zunera-ot-register');
}

export default function CurrentZuneraOtRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-zunera-ot-register" />;
}
