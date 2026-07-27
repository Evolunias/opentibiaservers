import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-empirebr-create-account');
}

export default function PopularEmpirebrCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-empirebr-create-account" />;
}
