import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-register-poland');
}

export default function PvpeRegisterPolandKeywordPage() {
  return <StaticKeywordPage slug="pvpe-register-poland" />;
}
