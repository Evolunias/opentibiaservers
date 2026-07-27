import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-register-france');
}

export default function NonPvpRegisterFranceKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-register-france" />;
}
