import NoResetClientPolandKeywordPage, { generateMetadata } from './no-reset-client-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetClientPolandKeywordPage />;
}
