import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-register-canada');
}

export default function PvpeRegisterCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-register-canada" />;
}
