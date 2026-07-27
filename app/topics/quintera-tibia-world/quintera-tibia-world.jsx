import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('quintera-tibia-world');
}

export default function QuinteraTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="quintera-tibia-world" />;
}
