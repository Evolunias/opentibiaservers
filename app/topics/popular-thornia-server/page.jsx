import PopularThorniaServerKeywordPage, { generateMetadata } from './popular-thornia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularThorniaServerKeywordPage />;
}
