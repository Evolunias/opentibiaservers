import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-register-latin-america');
}

export default function PvpeRegisterLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-register-latin-america" />;
}
