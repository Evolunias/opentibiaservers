import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-empirebr-open-tibia');
}

export default function FreshStartEmpirebrOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-empirebr-open-tibia" />;
}
