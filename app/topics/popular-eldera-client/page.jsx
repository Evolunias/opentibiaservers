import PopularElderaClientKeywordPage, { generateMetadata } from './popular-eldera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularElderaClientKeywordPage />;
}
