import PopularThorniaClientKeywordPage, { generateMetadata } from './popular-thornia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularThorniaClientKeywordPage />;
}
