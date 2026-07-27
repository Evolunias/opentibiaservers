import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-uk-servers');
}

export default function ClassicusUkServersKeywordPage() {
  return <StaticKeywordPage slug="classicus-uk-servers" />;
}
