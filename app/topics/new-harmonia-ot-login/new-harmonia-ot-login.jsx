import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-harmonia-ot-login');
}

export default function NewHarmoniaOtLoginKeywordPage() {
  return <StaticKeywordPage slug="new-harmonia-ot-login" />;
}
