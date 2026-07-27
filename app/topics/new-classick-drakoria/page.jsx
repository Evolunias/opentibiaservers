import NewClassickDrakoriaKeywordPage, { generateMetadata } from './new-classick-drakoria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewClassickDrakoriaKeywordPage />;
}
