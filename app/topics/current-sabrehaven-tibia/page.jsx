import CurrentSabrehavenTibiaKeywordPage, { generateMetadata } from './current-sabrehaven-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSabrehavenTibiaKeywordPage />;
}
