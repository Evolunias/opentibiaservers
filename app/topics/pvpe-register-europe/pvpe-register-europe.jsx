import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-register-europe');
}

export default function PvpeRegisterEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvpe-register-europe" />;
}
