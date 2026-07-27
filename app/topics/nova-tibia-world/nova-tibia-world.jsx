import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nova-tibia-world');
}

export default function NovaTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="nova-tibia-world" />;
}
