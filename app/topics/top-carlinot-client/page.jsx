import TopCarlinotClientKeywordPage, { generateMetadata } from './top-carlinot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCarlinotClientKeywordPage />;
}
