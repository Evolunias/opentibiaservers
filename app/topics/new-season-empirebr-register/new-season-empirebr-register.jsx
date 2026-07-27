import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-empirebr-register');
}

export default function NewSeasonEmpirebrRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-empirebr-register" />;
}
