import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-uk-servers');
}

export default function HarmoniaOtUkServersKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-uk-servers" />;
}
