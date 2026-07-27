import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-register-sweden');
}

export default function PvpeRegisterSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvpe-register-sweden" />;
}
