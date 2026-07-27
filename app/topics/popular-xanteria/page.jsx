import PopularXanteriaKeywordPage, { generateMetadata } from './popular-xanteria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularXanteriaKeywordPage />;
}
