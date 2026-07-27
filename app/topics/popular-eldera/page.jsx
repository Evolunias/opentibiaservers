import PopularElderaKeywordPage, { generateMetadata } from './popular-eldera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularElderaKeywordPage />;
}
