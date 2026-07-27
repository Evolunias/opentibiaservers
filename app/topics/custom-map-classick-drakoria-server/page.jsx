import CustomMapClassickDrakoriaServerKeywordPage, { generateMetadata } from './custom-map-classick-drakoria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapClassickDrakoriaServerKeywordPage />;
}
