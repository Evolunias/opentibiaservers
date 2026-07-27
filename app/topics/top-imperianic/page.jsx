import TopImperianicKeywordPage, { generateMetadata } from './top-imperianic';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopImperianicKeywordPage />;
}
