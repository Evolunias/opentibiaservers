import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-empirebr-create-account');
}

export default function OfficialEmpirebrCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-empirebr-create-account" />;
}
