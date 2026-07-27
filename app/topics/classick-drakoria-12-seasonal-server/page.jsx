import ClassickDrakoria12SeasonalServerKeywordPage, { generateMetadata } from './classick-drakoria-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoria12SeasonalServerKeywordPage />;
}
