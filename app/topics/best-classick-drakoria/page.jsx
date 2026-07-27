import BestClassickDrakoriaKeywordPage, { generateMetadata } from './best-classick-drakoria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestClassickDrakoriaKeywordPage />;
}
