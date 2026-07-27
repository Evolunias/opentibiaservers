import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('valoria-tibia');
}

export default function ValoriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="valoria-tibia" />;
}
