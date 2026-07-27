import TitaniaWarsKeywordPage, { generateMetadata } from './titania-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TitaniaWarsKeywordPage />;
}
