import LowrateClassickDrakoriaClientKeywordPage, { generateMetadata } from './lowrate-classick-drakoria-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateClassickDrakoriaClientKeywordPage />;
}
