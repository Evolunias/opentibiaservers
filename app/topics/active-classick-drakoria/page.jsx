import ActiveClassickDrakoriaKeywordPage, { generateMetadata } from './active-classick-drakoria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveClassickDrakoriaKeywordPage />;
}
