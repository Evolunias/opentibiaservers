import ClassicusSeasonalServerPolandKeywordPage, { generateMetadata } from './classicus-seasonal-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusSeasonalServerPolandKeywordPage />;
}
