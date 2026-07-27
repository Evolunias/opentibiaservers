import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nova-tibia');
}

export default function NovaTibiaKeywordPage() {
  return <StaticKeywordPage slug="nova-tibia" />;
}
