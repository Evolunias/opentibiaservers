import NtoStarHighExpKeywordPage, { generateMetadata } from './nto-star-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarHighExpKeywordPage />;
}
