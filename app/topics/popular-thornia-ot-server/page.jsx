import PopularThorniaOtServerKeywordPage, { generateMetadata } from './popular-thornia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularThorniaOtServerKeywordPage />;
}
