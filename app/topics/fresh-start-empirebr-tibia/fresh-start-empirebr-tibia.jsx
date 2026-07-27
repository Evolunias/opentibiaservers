import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-empirebr-tibia');
}

export default function FreshStartEmpirebrTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-empirebr-tibia" />;
}
