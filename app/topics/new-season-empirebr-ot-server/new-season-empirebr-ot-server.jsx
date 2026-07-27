import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-empirebr-ot-server');
}

export default function NewSeasonEmpirebrOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-empirebr-ot-server" />;
}
