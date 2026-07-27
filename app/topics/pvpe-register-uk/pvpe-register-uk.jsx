import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-register-uk');
}

export default function PvpeRegisterUkKeywordPage() {
  return <StaticKeywordPage slug="pvpe-register-uk" />;
}
