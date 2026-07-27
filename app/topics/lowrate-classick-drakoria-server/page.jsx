import LowrateClassickDrakoriaServerKeywordPage, { generateMetadata } from './lowrate-classick-drakoria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateClassickDrakoriaServerKeywordPage />;
}
