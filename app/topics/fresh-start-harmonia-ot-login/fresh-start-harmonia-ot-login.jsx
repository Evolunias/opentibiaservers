import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-harmonia-ot-login');
}

export default function FreshStartHarmoniaOtLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-harmonia-ot-login" />;
}
