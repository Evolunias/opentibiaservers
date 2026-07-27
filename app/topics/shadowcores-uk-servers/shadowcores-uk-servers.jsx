import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-uk-servers');
}

export default function ShadowcoresUkServersKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-uk-servers" />;
}
