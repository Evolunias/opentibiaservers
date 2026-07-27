import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-register-france');
}

export default function PvpeRegisterFranceKeywordPage() {
  return <StaticKeywordPage slug="pvpe-register-france" />;
}
