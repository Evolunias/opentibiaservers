import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('refugia-tibia-world');
}

export default function RefugiaTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="refugia-tibia-world" />;
}
