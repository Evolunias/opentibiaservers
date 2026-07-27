import SabrehavenOpenTibiaKeywordPage, { generateMetadata } from './sabrehaven-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenOpenTibiaKeywordPage />;
}
