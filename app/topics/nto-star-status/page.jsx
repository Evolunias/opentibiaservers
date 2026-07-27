import NtoStarStatusKeywordPage, { generateMetadata } from './nto-star-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarStatusKeywordPage />;
}
