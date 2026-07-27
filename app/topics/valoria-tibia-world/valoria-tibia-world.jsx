import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('valoria-tibia-world');
}

export default function ValoriaTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="valoria-tibia-world" />;
}
