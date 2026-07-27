import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('honera-tibia-world');
}

export default function HoneraTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="honera-tibia-world" />;
}
