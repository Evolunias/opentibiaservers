import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ruthless-chaos-wiki');
}

export default function CustomRuthlessChaosWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-ruthless-chaos-wiki" />;
}
