import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-uk-servers');
}

export default function SaintsotUkServersKeywordPage() {
  return <StaticKeywordPage slug="saintsot-uk-servers" />;
}
