import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-tibia');
}

export default function SabrehavenTibiaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-tibia" />;
}
