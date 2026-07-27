import CurrentNoxiousotOfficialKeywordPage, { generateMetadata } from './current-noxiousot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNoxiousotOfficialKeywordPage />;
}
