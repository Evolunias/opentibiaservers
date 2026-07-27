import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unitera-tibia-world');
}

export default function UniteraTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="unitera-tibia-world" />;
}
