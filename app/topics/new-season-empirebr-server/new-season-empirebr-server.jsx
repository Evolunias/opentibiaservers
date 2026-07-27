import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-empirebr-server');
}

export default function NewSeasonEmpirebrServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-empirebr-server" />;
}
