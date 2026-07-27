import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-register-south-america');
}

export default function FreshStartRegisterSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-register-south-america" />;
}
