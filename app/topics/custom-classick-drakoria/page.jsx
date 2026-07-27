import CustomClassickDrakoriaKeywordPage, { generateMetadata } from './custom-classick-drakoria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomClassickDrakoriaKeywordPage />;
}
