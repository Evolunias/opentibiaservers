import CarlinotCreateAccountKeywordPage, { generateMetadata } from './carlinot-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotCreateAccountKeywordPage />;
}
