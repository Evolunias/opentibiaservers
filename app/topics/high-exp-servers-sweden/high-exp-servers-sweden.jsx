import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-servers-sweden');
}

export default function HighExpServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="high-exp-servers-sweden" />;
}
