import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-uk-server');
}

export default function HarmoniaOtUkServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-uk-server" />;
}
