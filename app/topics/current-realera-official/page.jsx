import CurrentRealeraOfficialKeywordPage, { generateMetadata } from './current-realera-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRealeraOfficialKeywordPage />;
}
