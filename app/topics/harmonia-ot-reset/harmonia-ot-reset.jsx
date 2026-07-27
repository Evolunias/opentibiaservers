import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-reset');
}

export default function HarmoniaOtResetKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-reset" />;
}
