import NoResetKasteriaKeywordPage, { generateMetadata } from './no-reset-kasteria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetKasteriaKeywordPage />;
}
