import PopularNostaltherOtsKeywordPage, { generateMetadata } from './popular-nostalther-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNostaltherOtsKeywordPage />;
}
