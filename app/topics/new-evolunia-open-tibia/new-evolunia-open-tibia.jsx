import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-evolunia-open-tibia');
}

export default function NewEvoluniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-evolunia-open-tibia" />;
}
