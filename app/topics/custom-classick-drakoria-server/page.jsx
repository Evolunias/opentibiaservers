import CustomClassickDrakoriaServerKeywordPage, { generateMetadata } from './custom-classick-drakoria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomClassickDrakoriaServerKeywordPage />;
}
