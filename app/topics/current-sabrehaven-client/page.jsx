import CurrentSabrehavenClientKeywordPage, { generateMetadata } from './current-sabrehaven-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSabrehavenClientKeywordPage />;
}
