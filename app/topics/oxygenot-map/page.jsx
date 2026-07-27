import OxygenotMapKeywordPage, { generateMetadata } from './oxygenot-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotMapKeywordPage />;
}
