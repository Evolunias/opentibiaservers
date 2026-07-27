import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-evolunia-open-tibia');
}

export default function CustomEvoluniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-evolunia-open-tibia" />;
}
