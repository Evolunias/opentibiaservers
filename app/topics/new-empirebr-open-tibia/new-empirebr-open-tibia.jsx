import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-empirebr-open-tibia');
}

export default function NewEmpirebrOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-empirebr-open-tibia" />;
}
