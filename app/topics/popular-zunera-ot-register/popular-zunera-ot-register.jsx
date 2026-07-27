import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-zunera-ot-register');
}

export default function PopularZuneraOtRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-zunera-ot-register" />;
}
