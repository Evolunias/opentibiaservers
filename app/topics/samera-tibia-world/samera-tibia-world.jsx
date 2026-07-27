import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('samera-tibia-world');
}

export default function SameraTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="samera-tibia-world" />;
}
