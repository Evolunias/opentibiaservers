import CurrentSabrehavenOpenTibiaKeywordPage, { generateMetadata } from './current-sabrehaven-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSabrehavenOpenTibiaKeywordPage />;
}
