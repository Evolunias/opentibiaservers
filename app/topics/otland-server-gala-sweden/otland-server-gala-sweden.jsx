import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-server-gala-sweden');
}

export default function OtlandServerGalaSwedenKeywordPage() {
  return <StaticKeywordPage slug="otland-server-gala-sweden" />;
}
