import TopThorniaKeywordPage, { generateMetadata } from './top-thornia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopThorniaKeywordPage />;
}
