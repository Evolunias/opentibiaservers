import PopularThorniaOtKeywordPage, { generateMetadata } from './popular-thornia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularThorniaOtKeywordPage />;
}
