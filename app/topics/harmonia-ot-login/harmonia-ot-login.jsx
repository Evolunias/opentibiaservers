import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-login');
}

export default function HarmoniaOtLoginKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-login" />;
}
