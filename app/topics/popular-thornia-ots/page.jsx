import PopularThorniaOtsKeywordPage, { generateMetadata } from './popular-thornia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularThorniaOtsKeywordPage />;
}
