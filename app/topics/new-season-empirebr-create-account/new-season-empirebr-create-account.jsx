import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-empirebr-create-account');
}

export default function NewSeasonEmpirebrCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-empirebr-create-account" />;
}
