import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-uk-server');
}

export default function ShadowcoresUkServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-uk-server" />;
}
