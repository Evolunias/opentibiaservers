import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-servers-sweden');
}

export default function FreshStartServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-servers-sweden" />;
}
