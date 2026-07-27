import CustomClassickDrakoriaLoginKeywordPage, { generateMetadata } from './custom-classick-drakoria-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomClassickDrakoriaLoginKeywordPage />;
}
