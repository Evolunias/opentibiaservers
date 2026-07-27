import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-empirebr-client');
}

export default function NewSeasonEmpirebrClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-empirebr-client" />;
}
