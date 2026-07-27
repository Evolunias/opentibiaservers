import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-register-france');
}

export default function FreshStartRegisterFranceKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-register-france" />;
}
