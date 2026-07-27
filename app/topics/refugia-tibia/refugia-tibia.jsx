import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('refugia-tibia');
}

export default function RefugiaTibiaKeywordPage() {
  return <StaticKeywordPage slug="refugia-tibia" />;
}
