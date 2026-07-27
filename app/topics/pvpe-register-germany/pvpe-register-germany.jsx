import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-register-germany');
}

export default function PvpeRegisterGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvpe-register-germany" />;
}
