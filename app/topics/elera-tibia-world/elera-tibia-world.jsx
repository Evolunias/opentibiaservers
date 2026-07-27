import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('elera-tibia-world');
}

export default function EleraTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="elera-tibia-world" />;
}
