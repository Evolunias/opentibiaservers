import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('amera-tibia-world');
}

export default function AmeraTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="amera-tibia-world" />;
}
