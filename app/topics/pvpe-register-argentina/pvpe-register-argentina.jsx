import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-register-argentina');
}

export default function PvpeRegisterArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-register-argentina" />;
}
