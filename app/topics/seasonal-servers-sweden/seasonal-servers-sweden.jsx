import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-servers-sweden');
}

export default function SeasonalServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="seasonal-servers-sweden" />;
}
