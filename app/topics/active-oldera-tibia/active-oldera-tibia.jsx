import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-oldera-tibia');
}

export default function ActiveOlderaTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-oldera-tibia" />;
}
