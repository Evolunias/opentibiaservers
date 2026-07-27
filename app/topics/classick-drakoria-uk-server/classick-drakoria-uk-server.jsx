import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-uk-server');
}

export default function ClassickDrakoriaUkServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-uk-server" />;
}
