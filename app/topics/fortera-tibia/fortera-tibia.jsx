import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fortera-tibia');
}

export default function ForteraTibiaKeywordPage() {
  return <StaticKeywordPage slug="fortera-tibia" />;
}
