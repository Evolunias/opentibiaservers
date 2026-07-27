import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-register-north-america');
}

export default function FreshStartRegisterNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-register-north-america" />;
}
