import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-register-south-america');
}

export default function PvpRegisterSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-register-south-america" />;
}
