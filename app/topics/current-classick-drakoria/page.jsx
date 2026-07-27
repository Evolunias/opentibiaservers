import CurrentClassickDrakoriaKeywordPage, { generateMetadata } from './current-classick-drakoria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentClassickDrakoriaKeywordPage />;
}
