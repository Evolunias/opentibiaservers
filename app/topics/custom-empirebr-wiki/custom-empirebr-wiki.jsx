import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-empirebr-wiki');
}

export default function CustomEmpirebrWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-empirebr-wiki" />;
}
