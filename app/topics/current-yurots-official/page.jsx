import CurrentYurotsOfficialKeywordPage, { generateMetadata } from './current-yurots-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentYurotsOfficialKeywordPage />;
}
