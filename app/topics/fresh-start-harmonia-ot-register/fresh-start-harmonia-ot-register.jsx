import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-harmonia-ot-register');
}

export default function FreshStartHarmoniaOtRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-harmonia-ot-register" />;
}
