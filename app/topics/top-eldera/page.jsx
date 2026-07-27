import TopElderaKeywordPage, { generateMetadata } from './top-eldera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopElderaKeywordPage />;
}
