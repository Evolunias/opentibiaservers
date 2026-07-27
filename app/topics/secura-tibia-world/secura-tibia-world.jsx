import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('secura-tibia-world');
}

export default function SecuraTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="secura-tibia-world" />;
}
