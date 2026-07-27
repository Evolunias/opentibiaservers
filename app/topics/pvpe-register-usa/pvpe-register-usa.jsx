import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-register-usa');
}

export default function PvpeRegisterUsaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-register-usa" />;
}
