import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('antica-tibia-world');
}

export default function AnticaTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="antica-tibia-world" />;
}
