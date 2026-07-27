import ClassickDrakoria13SeasonalServerKeywordPage, { generateMetadata } from './classick-drakoria-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoria13SeasonalServerKeywordPage />;
}
