import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-register-brazil');
}

export default function PvpeRegisterBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvpe-register-brazil" />;
}
