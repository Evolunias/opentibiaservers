import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-uk-server');
}

export default function SaintsotUkServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-uk-server" />;
}
