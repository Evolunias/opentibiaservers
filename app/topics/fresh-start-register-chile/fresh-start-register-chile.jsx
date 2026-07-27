import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-register-chile');
}

export default function FreshStartRegisterChileKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-register-chile" />;
}
