import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-empirebr-tibia');
}

export default function CustomEmpirebrTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-empirebr-tibia" />;
}
