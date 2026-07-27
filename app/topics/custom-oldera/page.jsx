import CustomOlderaKeywordPage, { generateMetadata } from './custom-oldera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOlderaKeywordPage />;
}
