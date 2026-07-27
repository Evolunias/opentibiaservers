import PopularThaisotClientKeywordPage, { generateMetadata } from './popular-thaisot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularThaisotClientKeywordPage />;
}
