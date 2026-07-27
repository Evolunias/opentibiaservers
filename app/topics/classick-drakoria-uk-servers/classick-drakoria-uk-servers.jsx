import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-uk-servers');
}

export default function ClassickDrakoriaUkServersKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-uk-servers" />;
}
