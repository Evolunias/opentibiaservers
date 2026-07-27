import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-open-tibia');
}

export default function NilotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="nilot-open-tibia" />;
}
