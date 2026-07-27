import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-register-france');
}

export default function CustomMapRegisterFranceKeywordPage() {
  return <StaticKeywordPage slug="custom-map-register-france" />;
}
