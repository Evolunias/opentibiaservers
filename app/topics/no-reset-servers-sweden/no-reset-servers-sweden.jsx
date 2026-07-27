import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-servers-sweden');
}

export default function NoResetServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="no-reset-servers-sweden" />;
}
