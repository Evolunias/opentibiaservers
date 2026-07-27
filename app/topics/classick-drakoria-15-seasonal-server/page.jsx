import ClassickDrakoria15SeasonalServerKeywordPage, { generateMetadata } from './classick-drakoria-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoria15SeasonalServerKeywordPage />;
}
