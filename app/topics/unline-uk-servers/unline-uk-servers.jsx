import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-uk-servers');
}

export default function UnlineUkServersKeywordPage() {
  return <StaticKeywordPage slug="unline-uk-servers" />;
}
