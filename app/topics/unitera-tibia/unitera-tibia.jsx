import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unitera-tibia');
}

export default function UniteraTibiaKeywordPage() {
  return <StaticKeywordPage slug="unitera-tibia" />;
}
