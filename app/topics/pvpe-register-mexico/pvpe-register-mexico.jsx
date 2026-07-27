import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-register-mexico');
}

export default function PvpeRegisterMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvpe-register-mexico" />;
}
