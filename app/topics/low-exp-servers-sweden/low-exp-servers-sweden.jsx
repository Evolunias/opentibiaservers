import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-servers-sweden');
}

export default function LowExpServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="low-exp-servers-sweden" />;
}
