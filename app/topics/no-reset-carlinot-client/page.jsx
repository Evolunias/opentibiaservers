import NoResetCarlinotClientKeywordPage, { generateMetadata } from './no-reset-carlinot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCarlinotClientKeywordPage />;
}
