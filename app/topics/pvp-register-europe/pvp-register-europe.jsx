import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-register-europe');
}

export default function PvpRegisterEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvp-register-europe" />;
}
