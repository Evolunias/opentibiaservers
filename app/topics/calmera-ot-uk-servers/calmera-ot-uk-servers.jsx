import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-uk-servers');
}

export default function CalmeraOtUkServersKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-uk-servers" />;
}
