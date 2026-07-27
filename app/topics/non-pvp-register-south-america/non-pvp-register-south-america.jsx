import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-register-south-america');
}

export default function NonPvpRegisterSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-register-south-america" />;
}
