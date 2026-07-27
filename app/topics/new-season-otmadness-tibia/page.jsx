import NewSeasonOtmadnessTibiaKeywordPage, { generateMetadata } from './new-season-otmadness-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOtmadnessTibiaKeywordPage />;
}
