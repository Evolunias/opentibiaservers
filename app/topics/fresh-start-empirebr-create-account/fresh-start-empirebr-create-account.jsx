import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-empirebr-create-account');
}

export default function FreshStartEmpirebrCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-empirebr-create-account" />;
}
