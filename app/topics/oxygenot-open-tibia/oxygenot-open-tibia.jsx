import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-open-tibia');
}

export default function OxygenotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-open-tibia" />;
}
