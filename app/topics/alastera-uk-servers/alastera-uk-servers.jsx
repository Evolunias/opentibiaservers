import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-uk-servers');
}

export default function AlasteraUkServersKeywordPage() {
  return <StaticKeywordPage slug="alastera-uk-servers" />;
}
