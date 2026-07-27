import ClassicusSeasonalServerUsaKeywordPage, { generateMetadata } from './classicus-seasonal-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusSeasonalServerUsaKeywordPage />;
}
