import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dolera-tibia-world');
}

export default function DoleraTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="dolera-tibia-world" />;
}
