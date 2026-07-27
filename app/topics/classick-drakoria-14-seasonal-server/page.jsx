import ClassickDrakoria14SeasonalServerKeywordPage, { generateMetadata } from './classick-drakoria-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoria14SeasonalServerKeywordPage />;
}
