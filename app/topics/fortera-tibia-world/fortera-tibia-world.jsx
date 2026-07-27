import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fortera-tibia-world');
}

export default function ForteraTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="fortera-tibia-world" />;
}
