import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pythera-tibia-world');
}

export default function PytheraTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="pythera-tibia-world" />;
}
