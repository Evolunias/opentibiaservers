import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-register-south-america');
}

export default function PvpeRegisterSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-register-south-america" />;
}
