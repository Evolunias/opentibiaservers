import NewSeasonNoxiousotKeywordPage, { generateMetadata } from './new-season-noxiousot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNoxiousotKeywordPage />;
}
