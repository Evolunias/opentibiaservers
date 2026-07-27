import PopularXanteriaClientKeywordPage, { generateMetadata } from './popular-xanteria-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularXanteriaClientKeywordPage />;
}
