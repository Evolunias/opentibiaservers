import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-register-europe');
}

export default function NonPvpRegisterEuropeKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-register-europe" />;
}
