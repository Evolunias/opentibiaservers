import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-register-south-america');
}

export default function BaiakRegisterSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-register-south-america" />;
}
