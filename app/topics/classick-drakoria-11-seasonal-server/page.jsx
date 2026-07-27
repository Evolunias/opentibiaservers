import ClassickDrakoria11SeasonalServerKeywordPage, { generateMetadata } from './classick-drakoria-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoria11SeasonalServerKeywordPage />;
}
