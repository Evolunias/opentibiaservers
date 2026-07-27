import PopularXanteriaLoginKeywordPage, { generateMetadata } from './popular-xanteria-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularXanteriaLoginKeywordPage />;
}
