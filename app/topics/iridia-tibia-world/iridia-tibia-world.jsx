import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('iridia-tibia-world');
}

export default function IridiaTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="iridia-tibia-world" />;
}
