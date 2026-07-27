import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-tibia');
}

export default function OxygenotTibiaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-tibia" />;
}
