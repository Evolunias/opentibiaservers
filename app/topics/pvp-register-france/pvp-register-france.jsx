import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-register-france');
}

export default function PvpRegisterFranceKeywordPage() {
  return <StaticKeywordPage slug="pvp-register-france" />;
}
