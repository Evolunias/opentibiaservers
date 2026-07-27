import PopularXanteriaServerKeywordPage, { generateMetadata } from './popular-xanteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularXanteriaServerKeywordPage />;
}
