import PopularThorniaLoginKeywordPage, { generateMetadata } from './popular-thornia-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularThorniaLoginKeywordPage />;
}
