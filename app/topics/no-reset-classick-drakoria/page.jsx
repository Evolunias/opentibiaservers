import NoResetClassickDrakoriaKeywordPage, { generateMetadata } from './no-reset-classick-drakoria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetClassickDrakoriaKeywordPage />;
}
