import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-register-north-america');
}

export default function PvpeRegisterNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-register-north-america" />;
}
