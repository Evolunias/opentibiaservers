import ClassicusSeasonalServerBrazilKeywordPage, { generateMetadata } from './classicus-seasonal-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusSeasonalServerBrazilKeywordPage />;
}
