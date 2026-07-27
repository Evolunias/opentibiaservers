import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-empirebr-open-tibia');
}

export default function OfficialEmpirebrOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-empirebr-open-tibia" />;
}
