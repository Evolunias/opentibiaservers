import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-servers-sweden');
}

export default function BaiakServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="baiak-servers-sweden" />;
}
