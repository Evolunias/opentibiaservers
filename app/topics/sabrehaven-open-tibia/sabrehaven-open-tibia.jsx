import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-open-tibia');
}

export default function SabrehavenOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-open-tibia" />;
}
