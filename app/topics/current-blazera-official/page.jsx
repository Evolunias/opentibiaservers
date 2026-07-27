import CurrentBlazeraOfficialKeywordPage, { generateMetadata } from './current-blazera-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentBlazeraOfficialKeywordPage />;
}
