import TitaniaWorldKeywordPage, { generateMetadata } from './titania-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TitaniaWorldKeywordPage />;
}
