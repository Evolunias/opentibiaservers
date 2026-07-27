import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neptera-tibia-world');
}

export default function NepteraTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="neptera-tibia-world" />;
}
