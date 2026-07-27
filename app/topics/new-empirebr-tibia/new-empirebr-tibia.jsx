import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-empirebr-tibia');
}

export default function NewEmpirebrTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-empirebr-tibia" />;
}
