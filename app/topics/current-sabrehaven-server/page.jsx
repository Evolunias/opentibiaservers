import CurrentSabrehavenServerKeywordPage, { generateMetadata } from './current-sabrehaven-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSabrehavenServerKeywordPage />;
}
