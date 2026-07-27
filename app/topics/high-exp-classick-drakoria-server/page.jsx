import HighExpClassickDrakoriaServerKeywordPage, { generateMetadata } from './high-exp-classick-drakoria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpClassickDrakoriaServerKeywordPage />;
}
