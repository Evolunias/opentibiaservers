import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('iridia-tibia');
}

export default function IridiaTibiaKeywordPage() {
  return <StaticKeywordPage slug="iridia-tibia" />;
}
